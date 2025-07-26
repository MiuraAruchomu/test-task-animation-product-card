'use client';

import { useStore } from 'react-redux';
import { AppStore } from '@/shared/store/store';

export const useAppStore = useStore.withTypes<AppStore>();
