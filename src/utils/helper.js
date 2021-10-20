import moment from "moment";

export const getFieldData = (fieldData = [], field) => {
  let result = fieldData.filter((item) => item.field === field);
  return result;
};

export const getTargetFieldName = (prefix, fieldData) => {
  let list = [];
  for (let item of fieldData) {
    if (item.field.startsWith(`${prefix}_`)) list.push(item.field);
  }
  let result = list.filter((v, i, a) => a.indexOf(v) === i);
  return result;
};

export const getTargetLabelFromSection = (prefix, sectionFieldName) => {
  let result = sectionFieldName.replace(`${prefix}_`, "");
  result = result.split("_").join(" ");
  result = result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1) + "s";
  });
  if (result === "Categorys") return "Categories";
  return result;
};

export const randomColor = (index) => {
  const colors = ["blue", "cyan", "geekblue", "purple", "green"];
  // return colors[Math.floor(Math.random() * colors.length)];
  if (index > colors.length - 1) return "green";
  return colors[index];
};

export const toTitleText = (text) => {
  if (!text) return "";
  return text.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const getLabel = (name, labels) => {
  if (!labels) labels = [];
  for (let label of labels) {
    if (label.name === name) return label.text;
  }
  return "";
};

export const sortByValue = (arrObj = []) => {
  return arrObj.sort((a, b) => {
    var valueA = a.value.toLowerCase(); // ignore upper and lowercase
    var valueB = b.value.toLowerCase(); // ignore upper and lowercase
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
};


export const checkPwdStrength = (password) => {
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!password) return false;
  return strongRegex.test(password);
};

export const processLink = (link) => {
  if (!link) return "";
  if (!link.startsWith("http://") && !link.startsWith("https://")) {
    return "http://" + link;
  }
  return link;
};

export const durationFormatter = (duration) => {
  let value = "";
  const dur = moment.utc(duration * 1000);
  if (dur.hours() > 0) value += dur.hours() + "h ";
  if (dur.minutes() > 0) value += dur.minutes() + "m ";
  if (dur.seconds() > 0) value += dur.seconds() + "s";
  return value;
};
