# Lyrical-GraphQL

Starter project from a GraphQL course on Udemy.com

## Notes

### Optimistic Updates / Response

- Why? Calling the mutation and waiting for the response can take some time and in the mean time, we can guess at the response and show it before the response comes back

- call mutation --> guess at response --> UI updates
  -----> response comes back --> UI updates
  e.g.
  ```
      this.props.mutate({
      variables: { id },
      optimisticResponse: {
          __typename: "Mutation",
          likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
          },
      },
      });
  ```
