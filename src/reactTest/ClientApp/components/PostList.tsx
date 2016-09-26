import * as React from 'react';
import 'isomorphic-fetch';
import {IComment,IPost} from '../models/BlogModel';
import {PostDetails} from './PostDetails';
import { Router, Route, Link, browserHistory } from 'react-router';


interface PostState {
    posts : IPost[];
    loading : boolean;
}

export class PostList extends React.Component<any, PostState> {
constructor() {
    super();
    this.state = {posts: [], loading: true};

    fetch('/api/posts')
    .then(response => response.json())
    .then((data: IPost[]) => {
                this.setState({ posts: data, loading: false });
            });
}    
public render() {
    let contents = this.state.loading 
    ? <p><em>Loading...</em></p> 
    : PostList.RenderPostList(this.state.posts);

    return <div>
               <h1>Post List</h1>
               <p>Data was loaded from server</p>
               {contents}
           </div>;
}

private static RenderPostList(posts: IPost[]) {
    return  <div className="container">
               <div className="row">
                   <hr/>

                   <div className="col-md-10">
                    {posts.map(post => 
                       <div key={post.id}>

                           <div className="panel panel-default">
                               <div className="panel-heading">
                                    {post.id}
                                    <a> Post Details</a>
                               </div>
                               <div className="panel-body">
                                   <article>
                                       <div>{post.body}</div></article>
                               </div>
                               <div className="panel-footer">
                                   <div className="row">
                                       <div className="col-md-4">Author : <a href="#"> { post.username }</a>
                                       </div>
                                       <div className="col-md-4">Email: { post.email }</div>
                                       <div className="col-md-4">Post# { post.id }  -  Comments : {post.comments.length} 
                - link : <Link to={`/postdetails/${post.id}`}>Comments </Link>
</div>
                                    
                                   </div>
                               </div>
                           </div>

                       </div>
                    )}
                   </div>
 <div className="detail">
          
        </div>
               </div>
           </div>;


}
}

