import prisma from '../config/db.js';

export async function findAll({completed}) {
  const where = {};
  if(completed !== undefined){
    if(completed !== 'true' && completed !== 'false'){
      let error = new Error("Completed must be 'true' or 'false'");
      error.status(400);
      throw error;
    }
    where.completed = completed === "true";
  }
  return prisma.task.findMany({where});
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
