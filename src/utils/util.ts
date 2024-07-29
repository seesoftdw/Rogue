export const scrollToElement = (element: any) => {
  const { current } = element;
  if (element !== null) {
    if (current) {
      current.scrollIntoView({ behavior: "smooth"});
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }
};

export const removeKeyFromObj = (obj: any, _objKey: string) => {
  const newObj = { ...obj };

  Object.keys(newObj).forEach((key: string) => {
    if (key === _objKey) {
      delete newObj[key];
    } else {
      if (!newObj[key] || newObj[key] === "") {
        delete newObj[key];
      }
    }
  });

  return newObj;
};
