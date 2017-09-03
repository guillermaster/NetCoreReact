using NetCoreReact.Contract.DataContracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreReact.Contract.Repositories
{
    public interface IProjectsRepository
    {
        List<ProjectDto> GetAll();
        ProjectDto GetById(int id);
        void Add(AddProjectDto project);
        ProjectDto GetByName(string projectName);
    }
}
