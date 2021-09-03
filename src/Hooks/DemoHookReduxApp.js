import React,{useState} from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { ADD_COMMENT } from "../redux/typed/FakeBookType";
import { addCommentAction } from "../redux/action/FakeBookAction";

export default function DemoHookReduxApp(props)
{
    //thay thế cho UseSelector masStateToProps
    let comment = useSelector(state => state.FakeBookReducer.comments)
     
    //lấy hàm dispatch từ useDistapch gửi giá trị lên reducer
    let dispatch = useDispatch()

    //lấy thông tin người dùng nhập vào

    let [useStateComment, setUseStateComment] = useState({
        name: '',
        content: '',
        avatar: ''
    })



    const handleChange = (e) =>
    {
        let { value, name } = e.target
        setUseStateComment({
            ...useStateComment,
            [name]:value
        })
    }


    const handleComment = (e) =>
    {
        e.preventDefault()   //chặn browser reload
        
        let useComment =  {...useStateComment,avatar: `https://i.pravatar.cc/150?u=${useStateComment.name}`}

        // let action = {
        //     type: ADD_COMMENT,
        //     useComment : useComment
        // }
        dispatch(addCommentAction(useComment))
    }
	return (
		<div className="container">
			<h3>FakeBook App</h3>
			<div className="card text-left">
				<div className="card-header">
					{comment.map((comment, index) => {
						return (
							<div className="row" key={index}>
								<div className="col-2">
									<img
										style={{ height: 60 }}
										src={comment.avatar}
										alt
									/>
								</div>
								<div className="col-10">
									<h6 className="text-danger">{comment.name}</h6>
                                    <p className="">{comment.content}</p>
								</div>
							</div>
						);
					})}
				</div>
				<form className="card-body" onSubmit={handleComment}>
					<div className="form-group">
						<h4 className="card-title">Name</h4>
						<input className="form-control" name="name" onChange={handleChange}></input>
					</div>
					<div className="form-group">
						<h4 className="card-title">Content</h4>
						<input className="form-control" name="content" onChange={handleChange}></input>
					</div>
					<div className="form-group">
						<button className="btn btn-success mt-3">Send</button>
					</div>
				</form>
			</div>
		</div>
	);
}

// const mapStateToPros = (state) => ({
// 	comment: state.FakeBookReducer.comments,
// });

// export default connect(mapStateToPros)(DemoHookReduxApp);
