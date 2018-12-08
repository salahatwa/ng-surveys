import { Action } from '@ngrx/store';
import {IPageFlow} from '../../models/page-flow.model';

export enum OptionAnswersActionTypes {
  QUESTION_ADD_OPTION_ANSWERS_ACTION = '[Angular Option Answers] Add question option answer',
  QUESTION_REMOVE_OPTION_ANSWERS_ACTION = '[Angular Option Answers] Remove question option answer',
  QUESTION_REMOVE_OPTION_ANSWERS_MAP_ACTION = '[Angular Option Answers] Remove question option answer map',
  QUESTION_REMOVE_OPTION_ANSWERS_MAPS_ACTION = '[Angular Option Answers] Remove question option answer maps',
  QUESTION_ADD_OPTION_ANSWERS_VALUE_ACTION = '[Angular Option Answers] Add question option answer value',
  QUESTION_UPDATE_OPTION_ANSWERS_PAGE_FLOW = '[Angular Option Answers] Update question option page flow',
  DRAG_OPTION_ANSWERS_ACTION = '[Angular Option Answers] Drag question options',
}

export class AddOptionAnswersAction implements Action {
  readonly type = OptionAnswersActionTypes.QUESTION_ADD_OPTION_ANSWERS_ACTION;
  constructor(public payload: { elementId: string }) { }
}

export class RemoveOptionAnswersAction implements Action {
  readonly type = OptionAnswersActionTypes.QUESTION_REMOVE_OPTION_ANSWERS_ACTION;
  constructor(public payload: { elementId: string, optionAnswerId: string }) { }
}

export class RemoveOptionAnswersMapAction implements Action {
  readonly type = OptionAnswersActionTypes.QUESTION_REMOVE_OPTION_ANSWERS_MAP_ACTION;
  constructor(public payload: { elementId: string }) { }
}

export class RemoveOptionAnswersMapsAction implements Action {
  readonly type = OptionAnswersActionTypes.QUESTION_REMOVE_OPTION_ANSWERS_MAPS_ACTION;
  constructor(public payload: { elementIds: string[] }) { }
}

export class AddOptionAnswerValueAction implements Action {
  readonly type = OptionAnswersActionTypes.QUESTION_ADD_OPTION_ANSWERS_VALUE_ACTION;
  constructor(public payload: { elementId: string, optionAnswerId: string, value: string }) { }
}

export class UpdateOptionAnswerPageFlow implements Action {
  readonly type = OptionAnswersActionTypes.QUESTION_UPDATE_OPTION_ANSWERS_PAGE_FLOW;
  constructor(public payload: { elementId: string, optionAnswerId: string, pageFlow: IPageFlow }) { }
}

export class DragOptionAnswerAction implements Action {
  readonly type = OptionAnswersActionTypes.DRAG_OPTION_ANSWERS_ACTION;
  constructor(public payload: { elementId: string, startIndex: number, endIndex: number }) { }
}

export type Actions =
  AddOptionAnswersAction |
  RemoveOptionAnswersAction |
  RemoveOptionAnswersMapAction |
  RemoveOptionAnswersMapsAction |
  AddOptionAnswerValueAction |
  UpdateOptionAnswerPageFlow |
  DragOptionAnswerAction;