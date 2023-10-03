// TODO: remove before release
export function watchLatestCommit() {
  if (isLocalEnvironment()) {
    return;
  }

  const url = "commit.json";
  let current;

  function watch() {
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        if (json === undefined) {
          return;
        }
        current = current ?? json.sha;
        if (current === json.sha) {
          return;
        }

        Modal.message.show(
          "The game has been updated; this might break something: " +
          `"${json.message}" by ${json.author}`,
          {
            callback: updateRefresh,
            closeButton: true
          },
          3
        );
      });
  }

  setInterval(watch, 60000);
}
