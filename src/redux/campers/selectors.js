export const selectCampers = (state) => state.campers.campers;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectHasMore = (state) => state.campers.hasMore;
export const selectTotal = (state) => state.campers.total;

export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectIsCurrentLoading = (state) => state.campers.isCurrentLoading;