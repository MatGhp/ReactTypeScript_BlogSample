using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactTest.Models.ViewModel;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactTest.Controllers
{
    [Route("api/posts")]
    public class PostsController : Controller
    {
        //private readonly ApplicationDbContext _ctx;
        //public PostsController(ApplicationDbContext ctx)
        //{
        //    _ctx = ctx;

        //}
        List<PostViewModel> _posts = new List<PostViewModel> {
                new PostViewModel {
                    Id =22,
                    Title="Title_1 from WebAPI Service",
                    Body="Progressive Web Apps :  Use modern web platform capabilities to deliver app-like experiences. High performance, offline and zero-step installation.",
                    Email="a@b.com",
                    Username="George",
                    Comments = new List<CommentViewModel> {
                    new CommentViewModel {
                        Id=11,
                        Body="Comment body #1111 .......",
                        Email="s@f.com",
                        Username="user11",
                        PostId = 22
                    },
                    new CommentViewModel {
                        Id=12,
                        Body="Comment #22222 ...........",
                        Email="f@g.com",
                        Username="user 12",
                        PostId = 22
                    },
                    new CommentViewModel {
                        Id=13,
                        Body="Comment #33333333 XXXX",
                        Email="d@a.com",
                        Username="user 13",
                        PostId = 22
                    }
                }
                },
                  new PostViewModel {
                    Id=23,
                    Title="Title_2 from WebAPI Service",
                    Body="Native : Build native mobile apps with strategies from Ionic Framework, NativeScript, and React Native.",
                    Email="c@d.com",
                    Username="Matt",
                    Comments = new List<CommentViewModel> {
                         new CommentViewModel {
                        Id=14,
                        Body="Comment #4...........",
                        Email="s@m.com",
                        Username="user 14",
                        PostId = 23
                    }
                }
                }
        };

        // GET: api/Get
        [HttpGet]
        public IEnumerable<PostViewModel> Get()
        {
            return _posts;
        }

        [Route("{postId:int}/Comments")]
        [HttpGet("{postId}")]
        public IActionResult FindcommentsOfPost(int postId)
        {
            var post = _posts.FirstOrDefault(p => p.Id == postId);
            if (post != null && post.Comments.Count > 0)
            {
                return new ObjectResult(post.Comments.Select(c => new
                {
                    id = c.Id,
                    body = c.Body,
                    email = c.Email,
                    username = c.Username,
                    postId = postId

                }));
            }
            else return NotFound();
        }

        // GET api/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _posts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            return new ObjectResult(post);
        }

        // POST api/Post
        [HttpPost]
        public IActionResult Post([FromBody]PostViewModel post)
        {
            post.Id = _posts.Max(p => p.Id) + 1;
            _posts.Add(post);
            return new OkObjectResult(post);
        }

        // PUT api/Post/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/delete/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


    }
}
