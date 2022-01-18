using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3Assignment_Herd.Models
{
    public class GradeCalcModel
    {
        [Range(0,100, ErrorMessage = "Please enter number between 0 and 100")]
        public int Assgn { get; set; }
        [Range(0,100)]
        public int GP { get; set; }
        [Range(0, 100)]
        public int Quiz { get; set; }
        [Range(0, 100)]
        public int Exam { get; set; }
        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
