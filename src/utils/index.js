export const formatData = (data) => {
  const {name, main: { temp }, weather } = data
  return {title: name, content: `${parseInt(temp)}ºC`, footer: weather[0].main}
}