import { useEffect, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { getMonthlySummary } from "../api/timeEntryApi";

export default function Monthly() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1); // JS months 0-indexed
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    fetchMonthlySummary();
  }, []);

  const fetchMonthlySummary = async () => {
    try {
      const data = await getMonthlySummary(year, month);
      setTotalHours(data);
    } catch (error) {
      console.error("Failed to fetch monthly summary", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMonthlySummary();
  };

  return (
    <Container className="mt-4">
      <h2>Monthly Summary</h2>

      <Form className="mb-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Select Year</Form.Label>
          <Form.Control
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Select Month</Form.Label>
          <Form.Select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Show Monthly Summary
        </Button>
      </Form>

      <Card>
        <Card.Body>
          <Card.Title>Total Hours</Card.Title>
          <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {totalHours}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
