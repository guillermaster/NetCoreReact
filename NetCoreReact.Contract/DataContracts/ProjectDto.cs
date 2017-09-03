﻿using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreReact.Contract.DataContracts
{
    public class ProjectDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
