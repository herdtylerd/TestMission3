using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3Assignment_Herd.Models
{
    // Grade Calculation Model
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100, ErrorMessage = "Please enter number between 0 and 100")]
        public float Assgn { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter number between 0 and 100")]
        public float GP { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter number between 0 and 100")]
        public float Quiz { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter number between 0 and 100")]
        public float Exam { get; set; }

        [Range(0, 100, ErrorMessage = "Please enter number between 0 and 100")]
        public int Intex { get; set; }

    }
}
