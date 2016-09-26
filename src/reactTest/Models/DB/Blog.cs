using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTest.Models.DB
{
    public class Blog
    {
        public int Id { set; get; }
        public string Username { set; get; }
        public string UserEmail { set; get; }
        public string BlogAddress { set; get; }
        public List<Post> Posts { set; get; }
    }
}
