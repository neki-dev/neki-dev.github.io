const JOB_START_TIMESTAMP = 1404172800;

export function getTotalWorkExperience(): string {
  return ((Date.now() / 1000 - JOB_START_TIMESTAMP) / 31536000).toFixed(1);
}
