import { useEffect, useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import { getWeeklySummary } from "../api/timeEntryApi";

export default function Weekly() {
  const [weekStart, setWeekStart] = useState(
    new Date().toISOString().split("T")[0]
  ); // default today
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetchWeeklySummary();
  }, []);

  const fetchWeeklySummary = async () => {
    try {
      const data = await getWeeklySummary(weekStart);
      setSummary(data);
    } catch (error) {
      console.error("Failed to fetch weekly summary", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeeklySummary();
  };

  return (
    <Container className="mt-4">
      <h2>Weekly Summary</h2>

      <Form className="mb-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Select Week Start Date</Form.Label>
          <Form.Control
            type="date"
            value={weekStart}
            onChange={(e) => setWeekStart(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Show Weekly Summary
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(summary).length === 0 ? (
            <tr>
              <td colSpan={2} className="text-center">
                No entries found
              </td>
            </tr>
          ) : (
            Object.entries(summary).map(([date, hours]) => (
              <tr key={date}>
                <td>{date}</td>
                <td>{hours}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}
