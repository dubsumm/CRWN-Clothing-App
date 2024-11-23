import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (isCartOpenSlice) => isCartOpenSlice.isCartOpen
)

