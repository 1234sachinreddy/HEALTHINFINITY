export default function LogTable({ logs }) {
    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Action Type</th>
            <th>Timestamp</th>
            <th>User ID</th>
            <th>Role</th>
            <th>Additional Data</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log._id}>
              <td>{log.actionType}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
              <td>{log.userId?.username}</td>
              <td>{log.role}</td>
              <td>{JSON.stringify(log.additionalData)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  