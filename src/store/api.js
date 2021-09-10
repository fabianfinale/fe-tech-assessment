import { createAction } from '@reduxjs/toolkit';

export const apiCallInitiated = createAction('api/callInitiated');
export const apiCallSucceed = createAction('api/callSucceed');
export const apiCallFailed = createAction('api/callFailed');
