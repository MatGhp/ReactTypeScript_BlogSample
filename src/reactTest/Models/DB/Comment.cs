using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTest.Models.DB
{
    public class Comment
    {
        public int Id { set; get; }
        public string Body { set; get; }
        public string Username { set; get; }
        public string Email { set; get; }
        public int PostId { set; get; }
    }
}
