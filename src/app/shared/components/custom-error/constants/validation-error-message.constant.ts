export const VALIDATION_ERROR_MESSAGE: Record<keyof any, (args?: any) => string> = {
  required: () => `Este campo es obligatorio`,
  minlength: ({ requiredLength }) => `Formato inválido: el número debe tener al menos ${requiredLength} dígitos.`,
  maxlength: ({ requiredLength, actualLength }) => `Formato inválido: el número debe tener un máximo de ${requiredLength} dígitos. Actualmente tiene ${actualLength}.`
};