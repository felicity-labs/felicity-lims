import { useQuery } from '@urql/vue';
import { urqlClient } from '../../urql';
import { RootState } from '../state';
import { parseEdgeNodeToList } from '../../utils'
import { ActionTree, GetterTree, MutationTree } from 'vuex';

import {
  GET_ALL_BOARDS,
  GET_BOARD_BY_UID,
  GET_LISTING_TASK_BY_UID
} from '../../graphql/kanban.queries';



export interface IComment {
  uid?: string;
  comment?: string;
  dateCommented?: string;
  commentBy?: string;
}

export class Comment implements IComment {
  constructor(
    public uid?: string,
    public comment?: string,
    public dateCommented?: string,
    public commentBy?: string,
  ) {
  }
}

export interface IMileStone {
  uid?: string;
  name?: string;
  done?: boolean;
  assignee?: string;
}

export class MileStone implements IMileStone {
  constructor(
    public uid?: string,
    public name?: string,
    public done?: boolean,
    public assignee?: string,
  ) {
  }
}

export interface ITask {
  uid?: string;
  title?: string;
  description?: string;
  listingUid?: string;
  milestones?: IMileStone[];
  comments?: IComment[];
  status?: string;
  assignee?: string;
  dueDate?: string,
  members?: string[];
  tags?: string[];
}

export class Task implements ITask {
  constructor(
    public uid?: string,
    public title?: string,
    public description?: string,
    public listingUid?: string,
    public milestones?: IMileStone[],
    public comments?: IMileStone[],
    public status?: string,
    public assignee?: string,
    public dueDate?: string,
    public members?: string[],
    public tags?: string[],
  ) {
  }
}

 export interface IListing {
    uid?: string;
    name?: string;
    description?: string;
    listingTasks?: ITask[];
  }
  
  export class Listing implements IListing {
    constructor(
      public uid?: string,
      public name?: string,
      public description?: string,
      public listingTasks?: ITask[],
    ) {
    }
  }
  

export interface IBoard {
  uid?: string;
  title?: string;
  description?: string;
  departmentUid?: string;
  department?: any;
  boardListings?: IListing[];
}

export class Board implements IBoard {
  constructor(
    public uid?: string,
    public title?: string,
    public description?: string,
    public boardListings?: IListing[],
    public departmentUid?: string,
    public department?: any,
  ) {
  }
}

// state contract
export interface IState {
  boards: IBoard[];
  board: IBoard | null;
  listingTask: ITask | null;
}

export const initialState = () => {
  return <IState>{
    boards: [],
    board: null,
    listingTask: null,
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',

  RESET_BOARD = 'RESET_BOARD',
  SET_BOARDS = 'SET_BOARDS',
  SET_BOARD = 'SET_BOARD',
  ADD_BOARD = 'ADD_BOARD',

  ADD_BOARD_LISTING = 'ADD_BOARD_LISTING',

  ADD_LISTING_TASK = 'ADD_LISTING_TASK',
  MOVE_LISTING_TASK = 'MOVE_LISTING_TASK',
  DELETE_LISTING_TASK = 'DELETE_LISTING_TASK',
  DUPLICATE_LISTING_TASK = 'DUPLICATE_LISTING_TASK',
  RESET_LISTING_TASK = 'RESET_LISTING_TASK',
  FETCH_LISTING_TASK = 'FETCH_LISTING_TASK',
  SET_LISTING_TASK = 'SET_LISTING_TASK',

  ADD_TASK_COMMENT = 'ADD_TASK_COMMENT',

  ADD_TASK_MILESTONE = 'ADD_TASK_MILESTONE',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',

  RESET_BOARD = 'RESET_BOARD',
  FETCH_BOARDS = 'FETCH_BOARDS',
  FETCH_BOARD_BY_UID = 'FETCH_BOARD_BY_UID',
  ADD_BOARD = 'ADD_BOARD',

  ADD_BOARD_LISTING = 'ADD_BOARD_LISTING',

  ADD_LISTING_TASK = 'ADD_LISTING_TASK',
  MOVE_LISTING_TASK = 'MOVE_LISTING_TASK',
  DELETE_LISTING_TASK = 'DELETE_LISTING_TASK',
  DUPLICATE_LISTING_TASK = 'DUPLICATE_LISTING_TASK',
  RESET_LISTING_TASK = 'RESET_LISTING_TASK',
  FETCH_LISTING_TASK_BY_UID = 'FETCH_LISTING_TASK_BY_UID',
  SET_LISTING_TASK = 'SET_LISTING_TASK',

  ADD_TASK_COMMENT = 'ADD_TASK_COMMENT',

  ADD_TASK_MILESTONE = 'ADD_TASK_MILESTONE',
  
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getBoards: (state) => state.boards,
  getBoard: (state) => state.board,
  getListingTask: (state) => state.listingTask,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.RESET_BOARD](state: IState): void {
    state.board = null;;
  },

  [MutationTypes.SET_BOARDS](state: IState, payload: any[]): void {
    state.boards  = [];
    let boards = parseEdgeNodeToList(payload)
    state.boards = boards;
  },

  [MutationTypes.ADD_BOARD](state: IState, payload: any): void {
    let board: IBoard = payload.board;
    state.boards.push(board)
  },

  [MutationTypes.SET_BOARD](state: IState, payload: IBoard): void {
    let board = payload;
    board.boardListings = parseEdgeNodeToList(payload?.boardListings)
    board.boardListings!.forEach(board => {
      board.listingTasks = parseEdgeNodeToList(board?.listingTasks)
    })
    state.board = payload;
  },

  [MutationTypes.ADD_BOARD_LISTING](state: IState, payload: any): void {
    let board = state.board;
    if(board) board.boardListings!.push(payload.listing)
    state.board = board;
  },

  // LISTING TASKS
  [MutationTypes.RESET_LISTING_TASK](state: IState): void {
    state.listingTask = null;
  },

  [MutationTypes.ADD_LISTING_TASK](state: IState, payload: any): void {
    let board = state.board;
    board!.boardListings?.forEach((listing: IListing) => {
      if (listing.uid?.toString() === payload.task.listingUid?.toString()) {
        if(listing.listingTasks) {
          listing.listingTasks.push(payload.task)
        } else {
          listing.listingTasks = [payload.task]
        }
      }
    })
    state.board = board;
  },

  [MutationTypes.SET_LISTING_TASK](state: IState, payload: any): void {
    let task = payload;
    task.members = parseEdgeNodeToList(payload?.members)
    task.tags = parseEdgeNodeToList(payload?.tags)
    task.milestones = parseEdgeNodeToList(payload?.taskMilestones)
    task.comments = parseEdgeNodeToList(payload?.taskComments)
    state.listingTask = task;
  },

  [MutationTypes.MOVE_LISTING_TASK](state: IState, payload: any): void {
    let task = payload;
    task.members = parseEdgeNodeToList(payload?.members)
    task.tags = parseEdgeNodeToList(payload?.tags)
    task.milestones = parseEdgeNodeToList(payload?.taskMilestones)
    task.comments = parseEdgeNodeToList(payload?.taskComments)

    state!.board!.boardListings!.forEach(listing => {
      // remove old task
      const index = listing?.listingTasks?.findIndex(x => parseInt(x.uid!) === parseInt(task.uid!));
      if (index! > -1) {
        listing!.listingTasks!.splice(index!, 1);
      }
      // add task in new position
      if(parseInt(listing?.uid!) === parseInt(task?.listingUid!)) {
        listing?.listingTasks?.push(task);
      }
    })
  },

  [MutationTypes.DELETE_LISTING_TASK](state: IState, taskUid: any): void {
    if(taskUid){
      state!.board!.boardListings!.forEach(listing => {
        const index = listing?.listingTasks?.findIndex(x => parseInt(x.uid!) === parseInt(taskUid!));
        if (index! > -1) {
          listing!.listingTasks!.splice(index!, 1);
        }
      })
    }
  },

  [MutationTypes.DUPLICATE_LISTING_TASK](state: IState, payload: any): void {
    let board = state.board;
    board!.boardListings?.forEach((listing: IListing) => {
      if (listing.uid?.toString() === payload.task.listingUid?.toString()) {
        listing.listingTasks!.push(payload.task)
      }
    })
    state.board = board;
  },

  //  TASKS COMMENTS
  [MutationTypes.ADD_TASK_COMMENT](state: IState, payload: IComment): void {
    state.listingTask?.comments?.push(payload)
  },

  //  TASKS MILESTONES
  [MutationTypes.ADD_TASK_MILESTONE](state: IState, payload: IMileStone): void {
    state.listingTask?.milestones?.push(payload)
  },

};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },
  
  async [ActionTypes.RESET_BOARD]({ commit }) {
    commit(MutationTypes.RESET_BOARD);
  },

  async [ActionTypes.FETCH_BOARDS]({ commit }, payload){
    await useQuery({ query: GET_ALL_BOARDS })
          .then(payload => commit(MutationTypes.SET_BOARDS, payload.data.value.boardAll));
  },
  
  async [ActionTypes.ADD_BOARD]({ commit }, payload){
    commit(MutationTypes.ADD_BOARD, payload.data.createBoard);
  },

  async [ActionTypes.FETCH_BOARD_BY_UID]({ commit }, uid){
    await urqlClient
    .query( GET_BOARD_BY_UID, { uid })
    .toPromise()
    .then(result => commit(MutationTypes.SET_BOARD, result.data.boardByUid))
  },
  
  async [ActionTypes.ADD_BOARD_LISTING]({ commit }, payload){
    commit(MutationTypes.ADD_BOARD_LISTING, payload.data.createBoardListing);
  },
  
  // LISTING TASKS
  async [ActionTypes.RESET_LISTING_TASK]({ commit }) {
    commit(MutationTypes.RESET_LISTING_TASK);
  },
  
  async [ActionTypes.ADD_LISTING_TASK]({ commit }, payload){
    commit(MutationTypes.ADD_LISTING_TASK, payload.data.createListingTask);
  },

  async [ActionTypes.FETCH_LISTING_TASK_BY_UID]({ commit }, uid){
    await urqlClient
    .query( GET_LISTING_TASK_BY_UID, { uid })
    .toPromise()
    .then(result => commit(MutationTypes.SET_LISTING_TASK, result.data.listingTaskByUid))
  },
  
  async [ActionTypes.MOVE_LISTING_TASK]({ commit }, payload){
    commit(MutationTypes.MOVE_LISTING_TASK, payload.data.updateListingTask.task);
  },
  
  async [ActionTypes.DELETE_LISTING_TASK]({ commit }, payload){
    commit(MutationTypes.DELETE_LISTING_TASK, payload.data.deleteListingTask.taskUid);
  },
  
  async [ActionTypes.DUPLICATE_LISTING_TASK]({ commit }, payload){
    commit(MutationTypes.DUPLICATE_LISTING_TASK, payload.data.duplicateListingTask);
  },

  //  TASKS COMMENTS
  async [ActionTypes.ADD_TASK_COMMENT]({ commit }, payload){
    commit(MutationTypes.ADD_TASK_COMMENT, payload.data.createTaskComment.taskComment);
  },

  //  TASKS MILESTONES
  async [ActionTypes.ADD_TASK_MILESTONE]({ commit }, payload){
    commit(MutationTypes.ADD_TASK_MILESTONE, payload.data.createTaskMilestone.taskMilestone);
  },

};

// namespaced: true,
export const kanban = {
  state,
  mutations,
  actions,
  getters,
};