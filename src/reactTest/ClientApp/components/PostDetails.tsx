import * as React from 'react';
import 'isomorphic-fetch';
import {IPost, IComment} from '../models/BlogModel';


interface PostDetailsState {
    post? : IPost;
    loading: boolean;
    postid : number;
}

export class PostDetails extends React.Component<any, PostDetailsState> {
    constructor(props) {
        super(props);
        this.props = props;
        let id = this.props.params.postid;
        this.state = { loading: true, postid: id  };
        fetch(`/api/posts/${this.state.postid}`)
            .then(response => response.json())
            .then((data: IPost) => { this.setState({ post: data, loading: false, postid: id }); });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PostDetails.RenderPostDetails(this.state.post);

        return <div>
                   <h1>Post Details</h1>
                   <p>Data was loaded from server</p>
                   {contents}
               </div>;
    }


    private static RenderPostDetails(post: IPost) {
        return <div>
                   <div className="panel panel-primary">
                       <div className="panel-heading"> {post.title}</div>
                       <div className="panel-body">
                           <article>
                               <div >{post.body}</div></article>
                       </div>
                       <div className="panel-footer">
                           <a className="btn btn-default">
                               <i className='glyphicon glyphicon-chevron-left'></i> Back
                           </a>

                       </div>

                   </div>
                   <div>{post.comments.length}</div>


                   <div >
                       {post.comments.map(comment =>
                    <div key={comment.id}>
                        <div className="panel panel-default">
                            <div className="panel-heading">

                                <div className="row">
                                    <div className="col-md-6">Comment by: { comment.username }</div>
                                    <div className="col-md-6">Email: { comment.email }</div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <article>
                                    <div>{comment.body}</div></article>
                            </div>

                        </div>
                    </div>
)}
                   </div>

               </div>;
    }

}
