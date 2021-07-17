export const formatData = (data) => {
  const {name, main: { temp }, weather } = data
  return {title: name, content: temp, footer: weather[0].main}
}