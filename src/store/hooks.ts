/// External Dependencies

import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'

/// Internal Dependencies

import {
  AppDispatch,
  RootState,
} from '@/store'

/// Module

export const useAppDispatch =
  () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector
