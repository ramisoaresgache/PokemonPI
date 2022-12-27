const Validate = (input) => {
  const err = {};
  err.name = validateName(input);
  err.hp = validateHp(input);
  err.attack = validateAttack(input);
  err.defense = validateDefense(input);
  err.speed = validateSpeed(input);
  err.height = validateHeight(input);
  err.width = validateWidth(input);
  err.image = validateImage(input);

  const validateName = (input) => {
    return input.name.length > 0 && input.name.match(/[0-9]/) ? true : false;
  };
  const validateHp = (input) => {
    return input.hp.length > 0 && input.hp.match(/^[0-9]+$/) ? true : false;
  };
  const validateAttack = (input) => {
    return input.attack.length > 0 && input.attack.match(/^[0-9]+$/)
      ? true
      : false;
  };
  const validateDefense = (input) => {
    return input.defense.length > 0 && input.defense.match(/^[0-9]+$/)
      ? true
      : false;
  };
  const validateSpeed = (input) => {
    return input.speed.length > 0 && input.speed.match(/^[0-9]+$/)
      ? true
      : false;
  };
  const validateHeight = (input) => {
    return input.height.length > 0 && input.height.match(/^[0-9]+$/)
      ? true
      : false;
  };
  const validateWidth = (input) => {
    return input.width.length > 0 && input.width.match(/^[0-9]+$/)
      ? true
      : false;
  };
  const validateImage = (input) => {
    return input.image.length > 0 && input.image.match(/^(https?:\/\/)?/)
      ? true
      : false;
  };
  return err;
};
