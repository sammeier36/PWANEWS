import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromNews from '../reducers/news.reducer';

export const getNewsItemsState = createSelector(fromFeature.getNewsState, (state: fromFeature.NewsState) => state.news);

export const getNewsEntities = createSelector(getNewsItemsState, fromNews.getNewsEntities);

export const getAllNews = createSelector(
    getNewsEntities,
    (entities) => {
        // tslint:disable-next-line:variable-name
        console.log("GET NEWS", entities);
        return Object.keys(entities).map(guid => entities[guid]);
    }
);

export const getNewsLoaded = createSelector(getNewsItemsState, fromNews.getNewsLoaded);
export const getNewsLoading = createSelector(getNewsItemsState, fromNews.getNewsLoading);
