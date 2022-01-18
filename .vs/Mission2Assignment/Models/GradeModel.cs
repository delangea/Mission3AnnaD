using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Models
{
    public class GradeModel
    {
        [Range(0, 100)]
        public int Assignments { get; set; }
        [Range(0, 100)]
        public int Projects { get; set; }
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Range(0, 100)]
        public int INTEX { get; set; }
        [Range(0, 100)]
        public int Exams { get; set; }
    }
}
