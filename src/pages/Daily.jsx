import { useEffect, useState } from "react";
import { Container, Table, Form, Button, Row, Col } from "react-bootstrap";
import { getProjects, createProject } from "../api/projectApi";
import { createTimeEntry, getDailyEntries } from "../api/timeEntryApi";

export default function Daily() {
  const [projects, setProjects] = useState([]);
  const [entries, setEntries] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [hours, setHours] = useState(0);
  const [newProjectName, setNewProjectName] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchProjects();
    fetchDailyEntries();
  }, []);

  // Fetch all projects
  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  // Fetch daily entries
  const fetchDailyEntries = async () => {
    const data = await getDailyEntries(today);
    setEntries(data);
  };

  // Add a new time entry
  const handleTimeEntrySubmit = async (e) => {
    e.preventDefault();
    if (!selectedProject) return;

    await createTimeEntry({
      date: today,
      hours: parseFloat(hours),
      projectId: parseInt(selectedProject),
    });

    setHours(0);
    fetchDailyEntries();
  };

  // Create a new project
  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (!newProjectName) return;

    await createProject(newProjectName);
    setNewProjectName("");
    fetchProjects(); // refresh project list
  };

  return (
    <Container className="mt-4">
      <h2>Daily Time Entry</h2>

      {/* CREATE PROJECT FORM */}
      <Form onSubmit={handleCreateProject} className="mb-4">
        <Row className="align-items-center">
          <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="New project name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              required
            />
          </Col>
          <Col xs={4}>
            <Button type="submit" variant="success">
              Create Project
            </Button>
          </Col>
        </Row>
      </Form>

      {/* ADD TIME ENTRY FORM */}
      <Form onSubmit={handleTimeEntrySubmit} className="mb-4">
        <Form.Group className="mb-2">
          <Form.Label>Project</Form.Label>
          <Form.Select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            required
          >
            <option value="">Select a project</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Hours Worked</Form.Label>
          <Form.Control
            type="number"
            step="0.1"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Add Entry
        </Button>
      </Form>

      {/* DAILY ENTRIES TABLE */}
      <h4>Today's Entries</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {entries.length === 0 ? (
            <tr>
              <td colSpan={2} className="text-center">
                No entries found
              </td>
            </tr>
          ) : (
            entries.map((e, idx) => (
              <tr key={idx}>
                <td>{e.projectName}</td>
                <td>{e.hours}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}
