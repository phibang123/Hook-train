import {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
} from "../../ComponentToDoList/Heading";
import { Input, Label, TextField } from "../../ComponentToDoList/TextField";
import React, { Component } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "../../ComponentToDoList/Table";
import { ThemeManager, arrTheme } from "../../Themes/ThemeManager";
import {
	addTaskAction,
	changeThemeAction,
	deleteTaskAction,
	doneTaskAction,
	editTaskAction,
	updateTask,
} from "../../../redux/action/ToDoListAction";

import { Button } from "../../ComponentToDoList/Button";
import { Container } from "../../ComponentToDoList/Container";
import { Dropdown } from "../../ComponentToDoList/Dropdown";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme";
import { connect } from "react-redux";

class ToDoList extends Component {
	//tại sao có cái state này
	//vì chúng ta xài onChange cho input
	//nên việc phải gán giá trị trước cho state
	//và truyền nó lại cho dispatch
	state = {
		taskName: "",
		disabled: true,
	};
	rederTaskToDo = () => {
		//vì bạn tạo 1 render done == true nên phải dùng filter
		return this.props.taskList
			.filter((task) => !task.done)
			.map((task, index) => {
				return (
					<Tr key={index}>
						<Th style={{ verticalAlign: "middle" }} valign="middle">
							{task.taskName}
						</Th>
						<Th style={{ textAlign: "right" }}>
							<Button
								onClick={() => {
									this.props.dispatch(doneTaskAction(task.id));
								}}
							>
								Check
							</Button>
							<Button
								onClick={() => {
									this.setState(
										{
											disabled: false,
										},
										() => {
											this.props.dispatch(editTaskAction(task));
										}
									);
								}}
							>
								Edit
							</Button>
							<Button
								onClick={() => {
									this.props.dispatch(deleteTaskAction(task.id));
								}}
							>
								Remove
							</Button>
						</Th>
					</Tr>
				);
			});
	};
	rederTaskToCompleted = () => {
		return this.props.taskList
			.filter((task) => task.done)
			.map((task, index) => {
				return (
					<Tr key={index}>
						<Th style={{ verticalAlign: "middle" }} valign="middle">
							{task.taskName}
						</Th>
						<Th style={{ textAlign: "right" }}>
							<Button
								onClick={() => {
									this.props.dispatch(deleteTaskAction(task.id));
								}}
							>
								Remove
							</Button>
						</Th>
					</Tr>
				);
			});
	};
	// handleChange = (e) =>
	// {
	//     let { name, value } = e.target.value;
	//     this.setState({
	//         [name]: value
	//     })

	// }

	//viết hàm rederTheme import ThemeManaGer

	rederTheme = () => {
		return arrTheme.map((theme, index) => {
			return <option value={theme.id}>{theme.name}</option>;
		});
	};
	//nhận vào props mới được thực thi tr render
	// componentWillReceiveProps(newProps)
	// {
	// 	console.log('this.props', this.props)
	// 	console.log('newProps', newProps)
	// 	this.setState({
	// 		taskName: newProps.taskEdit.taskName
	// 	})
	// }

	//lifecycle tỉnh không truy xuất được con trỏ this
	// static getDerivedStateFromProps(newProps, currentState)
	// {
	// 	//newProps: là props mới, props củ là this.props(không truy xuất được)

	// 	//currentState: ừng với state hiện tại this.state

	//    //trả về state mới(this.state)
	// 	let newSate = { ...currentState, taskName: newProps.taskEdit.taskName }
	// 	return newSate;

	// 	//trẻ về null state giừi nguyên
	// 	// return null
	// }
	render() {
		return (
			<ThemeProvider theme={this.props.themToDoList}>
				<Container style={{ width: "50%" }}>
					<Dropdown
						onChange={(e) => {
							let { value } = e.target;
							//dispatch lên reducer

							this.props.dispatch(changeThemeAction(value));
							
						}}
					>
						{this.rederTheme()}
					</Dropdown>
					<Heading3>To Do List</Heading3>

					<TextField
						label="Task Name"
						name="taskName"
						value={this.state.taskName}
						onChange={(e) => {
							this.setState(
								{
									taskName: e.target.value, //phải học
								},
								() => {
									console.log(this.state);
								}
							);
						}}
					></TextField>
					<Button
						className="m-2"
						onClick={() => {
							//lấy thông tin người dùng nhập vào từ input
							let { taskName } = this.state;

							//tạo 1 task objeck
							let newTask = {
								id: Date.now(),
								taskName: taskName,
								done: false,
							};

							//đưa task objeckt lên redux
							/*--khi bạn dispath nó truyền dử liệu vào addTaskAction
                        và nó sẻ gọi cái type và dử liệu
                        */
							this.props.dispatch(addTaskAction(newTask));

							//thông qua phương thức detpatch
						}}
					>
						<i className="fa fa-plus"></i> Add Task
					</Button>
					{this.state.disabled ? (
						<Button
							className="m-2"
							disabled
							onClick={() => {
								this.props.dispatch(updateTask(this.state.taskName));
							}}
						>
							<i className="fa fa-upload"></i>Update task
						</Button>
					) : (
						<Button
							className="m-2"
								onClick={() =>
								{
									let { taskName } = this.state;
								this.setState(
									{
										disabled: true,
										taskName: ''
									},
									() => {
										this.props.dispatch(updateTask(taskName));
									}
								);
							}}
						>
							<i className="fa fa-upload"></i>Update task Now
						</Button>
					)}

					<hr></hr>
					<Heading3>Task To Do</Heading3>
					<Table>
						<Thead>{this.rederTaskToDo()}</Thead>
					</Table>
					<Heading3>Task Complete</Heading3>
					<Table>
						<Thead>{this.rederTaskToCompleted()}</Thead>
					</Table>
				</Container>
			</ThemeProvider>
		);
	}

	//đây là lifecycle trả về Props củ và State củ	trước khi render nhưng nó chạy sau render
	componentDidUpdate(prevProps, prevState) {
		//so sánh nếu như props trước đó (taskEdit trước đó mà khác taskEdit hiện tại thì mình mời setState)
		if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
			this.setState({
				taskName: this.props.taskEdit.taskName,
			});
		}
	}
}

const mapStateToProps = (state) => {
	return {
		themToDoList: state.ToDoListReducer.themToDoList,
		taskList: state.ToDoListReducer.taskList,
		taskEdit: state.ToDoListReducer.taskEdit,
	};
};
export default connect(mapStateToProps)(ToDoList);
