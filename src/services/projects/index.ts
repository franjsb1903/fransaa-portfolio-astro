import type { Project } from '../../models/project'

export async function getProjects(): Promise<Project[]> {
  const repos = await fetch(
    `${import.meta.env.API_GITHUB}/users/franjsb1903/repos`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.API_GITHUB_TOKEN}`,
      },
    },
  )
    .then(res => res.json())
    .then(data => data)

  if (!Array.isArray(repos))
    throw new Error(
      'No se han podido recuperar los proyectos, por favor, ponte en contacto conmigo en fjsbesteiro@outlook.es',
    )

  const finalRepos = repos.filter(
    repo =>
      repo.name !== 'franjsb1903' && repo.name !== 'franjsb1903.github.io',
  )

  const projects: Project[] = finalRepos?.map(repo => {
    const {
      id,
      name,
      description,
      html_url: url,
      homepage: link,
      topics: tools,
    } = repo

    return {
      id,
      title: name.replace(/-/g, ' ').toUpperCase(),
      description,
      tools: tools ?? [],
      repo: url,
      link,
    }
  })

  return projects
}
