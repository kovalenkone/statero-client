export const useTask = (taskId: number) => {
  const handleChangeTitle = (title: string) => {}

  const handleChangeDescription = (description: string) => {}

  const handleChangeProject = (projectId: number, sectionId?: string) => {}

  const handleChangeTags = () => {}

  return {
    handleChangeTitle,
    handleChangeDescription,
    handleChangeProject,
    handleChangeTags,
  }
}
