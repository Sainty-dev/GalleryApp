// src/redux/slices/gallerySlice.ts
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Image} from '../../interfaces/Image';
import { fetchImages } from '../../api/GalleryApi';

interface GalleryState {
  images: Image[];
  filteredImages: Image[];
  loading: boolean;
  error: string | null;
}

const initialState: GalleryState = {
  images: [],
  filteredImages: [],
  loading: false,
  error: null,
};

export const loadImages = createAsyncThunk(
  'gallery/loadImages',
  async (page: number) => {
    const images = await fetchImages(page);
    return images;
  },
);

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    filterImages: (state, action) => {
      const query = action.payload.toLowerCase();
      console.log('query', query);
      state.filteredImages = state.images.filter(image =>
        image.title.toLowerCase().includes(query),
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadImages.pending, state => {
        state.loading = true;
      })
      .addCase(loadImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = [...state.images, ...action.payload];
        state.filteredImages = state.images;
      })
      .addCase(loadImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load images';
      });
  },
});

export const {filterImages} = gallerySlice.actions;

export default gallerySlice.reducer;
