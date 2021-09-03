import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../typed/ToDoListType";

import { ToDoListDarkTheme } from "../../BaiTapStyleComponent/Themes/ToDoListDarkTheme";
import {arrTheme} from "../../BaiTapStyleComponent/Themes/ThemeManager";

const initialState = {
	themToDoList: ToDoListDarkTheme,
	taskList: [
		{ id: "task-1", taskName: "task1", done: true },
		{ id: "task-2", taskName: "task2", done: false },
		{ id: "task-3", taskName: "task3", done: true },
		{ id: "task-4", taskName: "task4", done: false },
    ],
    taskEdit : {id: '-1',taskName: '',done:false}
};

export const ToDoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case add_task: {
			console.log("todo", action.newTask);
			if (action.newTask.taskName.trim() === "") {
				alert("Task Name is required!");
				return { ...state };
			}
			//kiểm tra tồn tại
			let taskListUpdate = [...state.taskList];

			let index = taskListUpdate.findIndex(
				(task) => task.taskName === action.newTask.taskName
			);
			if (index !== -1) {
				alert("task name already exisis!");
				return { ...state };
			}

			//kiểm tra xong mới đưa vào task list hiện tại
			state.taskList = [...taskListUpdate, action.newTask];
			return { ...state };
		}
        case change_theme: {
            //tìm ra theme dựa vào action.ThemId dc chon5
          
            let theme = arrTheme.find(theme => theme.id == action.themeId)
            console.log(arrTheme.id);
            if (theme)
            {
                
                //set lại theme cho ToDoList
                state.themToDoList = {...theme.theme}
            }
            
            return {...state}
        }
        case done_task: {
            
            console.log('done_task', action)
            let taskListUpdate = [...state.taskList]

            let index = taskListUpdate.findIndex(task => task.id === action.taskId)

            if (index !== -1)
            //tìm thấy
            {
                console.log(`index`,index)
                taskListUpdate[index].done = true;
            }
            // state.taskList = taskListUpdate;
            return {...state,taskList: taskListUpdate}
        }
    
        case delete_task: {
            console.log('done_task', action.taskId)
            // let taskListUpdate = [...state.taskList]

            // taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId)

            // return {...state,taskList:taskListUpdate}
            return {...state,taskList: state.taskList.filter(task => task.id !== action.taskId)}
        }
        case update_task: {
            //chỉnh sửa lại tak name của task edit
            state.taskEdit = { ...state.taskEdit, taskName: action.taskName }
            console.log(action.taskName)

            //tìm trong task list cập nhật laị task Edit người dùng update
            let taskListUpdate = [...state.taskList]
            
            let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id);
            
            if (index !== -1)
            {
                taskListUpdate[index] = state.taskEdit;
                
            }
            state.taskList = taskListUpdate
            state.taskEdit = {id: -1 , taskName:'',done:false} //tạo lại taskEdit
            return {...state}
         }
        case edit_task: {
            console.log('action',action.task)
            return {...state,taskEdit: action.task}
        }
        
		default:
			return { ...state };
	}
};
