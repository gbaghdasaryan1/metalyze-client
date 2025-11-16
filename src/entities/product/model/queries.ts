// entities/product/model/queries.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import httpClient from '@src/config/http-client';
import type { AxiosError } from 'axios';
import { ProductType } from './types';

export type CreateProductInput = Omit<
  ProductType,
  'id' | 'createdAt' | 'updatedAt'
>;
export type UpdateProductInput = Partial<CreateProductInput>;

export type ProductsResponse = {
  data: ProductType[];
  total: number;
  page: number;
  limit: number;
};

export type ProductResponse = {
  data: ProductType;
};

// ============================================================================
// Query Keys
// ============================================================================

export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters?: Record<string, any>) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};

// ============================================================================
// API Functions
// ============================================================================

const productApi = {
  // GET /products - Fetch all products
  getProducts: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
  }): Promise<ProductsResponse> => {
    const response = await httpClient.get<ProductsResponse>('/product', {
      params,
    });
    return response.data;
  },

  // GET /products/:id - Fetch single product
  getProduct: async (id: string): Promise<ProductType> => {
    const response = await httpClient.get<ProductResponse>(`/products/${id}`);
    return response.data.data;
  },

  // POST /products - Create new product
  createProduct: async (data: CreateProductInput): Promise<ProductType> => {
    const response = await httpClient.post<ProductResponse>('/products', data);
    return response.data.data;
  },

  // PUT /products/:id - Update existing product
  updateProduct: async (
    id: string,
    data: UpdateProductInput
  ): Promise<ProductType> => {
    const response = await httpClient.put<ProductResponse>(
      `/products/${id}`,
      data
    );
    return response.data.data;
  },

  // PATCH /products/:id - Partial update
  patchProduct: async (
    id: string,
    data: Partial<ProductType>
  ): Promise<ProductType> => {
    const response = await httpClient.patch<ProductResponse>(
      `/products/${id}`,
      data
    );
    return response.data.data;
  },

  // DELETE /products/:id - Delete product
  deleteProduct: async (id: string): Promise<void> => {
    await httpClient.delete(`/products/${id}`);
  },
};

// ============================================================================
// Query Hooks (READ operations)
// ============================================================================

/**
 * Hook to fetch all products with optional filters
 * @example
 * const { data, isLoading, error } = useProductsQuery({ category: 'jewelry' });
 */
export const useProductsQuery = (params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}) => {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => productApi.getProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

/**
 * Hook to fetch a single product by ID
 * @example
 * const { data: product, isLoading } = useProductQuery('prod-123');
 */
export const useProductQuery = (
  id: string,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productApi.getProduct(id),
    enabled: options?.enabled ?? !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// ============================================================================
// Mutation Hooks (CREATE, UPDATE, DELETE operations)
// ============================================================================

/**
 * Hook to create a new product
 * @example
 * const createProduct = useCreateProductMutation();
 * createProduct.mutate(newProductData, {
 *   onSuccess: (product) => console.log('Created:', product),
 * });
 */
export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<ProductType, AxiosError, CreateProductInput>({
    mutationFn: (data) => productApi.createProduct(data),
    onSuccess: (newProduct) => {
      // Invalidate products list to refetch with new product
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });

      // Optionally set the new product in cache
      queryClient.setQueryData(productKeys.detail(newProduct.id), newProduct);
    },
    onError: (error) => {
      console.error('Failed to create product:', error);
    },
  });
};

/**
 * Hook to update an existing product
 * @example
 * const updateProduct = useUpdateProductMutation();
 * updateProduct.mutate({ id: 'prod-123', data: { price: 299 } });
 */
export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ProductType,
    AxiosError,
    { id: string; data: UpdateProductInput }
  >({
    mutationFn: ({ id, data }) => productApi.updateProduct(id, data),
    onSuccess: (updatedProduct, variables) => {
      // Update the specific product in cache
      queryClient.setQueryData(
        productKeys.detail(variables.id),
        updatedProduct
      );

      // Invalidate lists to reflect changes
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to update product:', error);
    },
  });
};

/**
 * Hook to partially update a product (PATCH)
 * @example
 * const patchProduct = usePatchProductMutation();
 * patchProduct.mutate({ id: 'prod-123', data: { stock: 50 } });
 */
export const usePatchProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ProductType,
    AxiosError,
    { id: string; data: Partial<ProductType> }
  >({
    mutationFn: ({ id, data }) => productApi.patchProduct(id, data),
    onSuccess: (updatedProduct, variables) => {
      queryClient.setQueryData(
        productKeys.detail(variables.id),
        updatedProduct
      );
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to patch product:', error);
    },
  });
};

/**
 * Hook to delete a product
 * @example
 * const deleteProduct = useDeleteProductMutation();
 * deleteProduct.mutate('prod-123', {
 *   onSuccess: () => console.log('Deleted successfully'),
 * });
 */
export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, string>({
    mutationFn: (id) => productApi.deleteProduct(id),
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: productKeys.detail(deletedId) });

      // Invalidate lists
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
    onError: (error) => {
      console.error('Failed to delete product:', error);
    },
  });
};

// ============================================================================
// Optimistic Update Hooks (Advanced)
// ============================================================================

/**
 * Hook to update product with optimistic UI updates
 * @example
 * const updateProduct = useOptimisticUpdateProductMutation();
 * updateProduct.mutate({ id: 'prod-123', data: { price: 299 } });
 */
export const useOptimisticUpdateProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ProductType,
    AxiosError,
    { id: string; data: UpdateProductInput },
    { previousProduct?: ProductType }
  >({
    mutationFn: ({ id, data }) => productApi.updateProduct(id, data),
    onMutate: async ({ id, data }) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: productKeys.detail(id) });

      // Snapshot previous value
      const previousProduct = queryClient.getQueryData<ProductType>(
        productKeys.detail(id)
      );

      // Optimistically update
      if (previousProduct) {
        queryClient.setQueryData<ProductType>(productKeys.detail(id), {
          ...previousProduct,
          ...data,
        });
      }

      return { previousProduct };
    },
    onError: (error, variables, context) => {
      // Rollback on error
      if (context?.previousProduct) {
        queryClient.setQueryData(
          productKeys.detail(variables.id),
          context.previousProduct
        );
      }
    },
    onSettled: (data, error, variables) => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
    },
  });
};
