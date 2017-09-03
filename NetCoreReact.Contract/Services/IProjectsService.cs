using NetCoreReact.Contract.Common;
using NetCoreReact.Contract.DataContracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreReact.Contract.Services
{
    public interface IProjectsService
    {
        List<ProjectDto> GetAll();
        CommonResult<ProjectDto> GetById(int id);

        CommonResult Add(AddProjectDto project);
    }
}
