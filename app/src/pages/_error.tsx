export default function ErrorPage({
  statusCode,
  error,
}: {
  statusCode: number;
  error: Error;
}) {
  return (
    <p>
      <h1>{error.name}</h1>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
      <hr />
      {error.message}
    </p>
  );
}
