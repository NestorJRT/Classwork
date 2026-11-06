import ProjectDetails from '../../../components/ProjectDetails';

export default async function InitiativePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectDetails id={id} />;
}
