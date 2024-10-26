import { createServer, Model } from 'miragejs'

export function makeServer() {
  createServer({
    models: {
      task: Model,
    },
    seeds(server) {
      server.create("task", { id: 1, title: "Sample Task 1", completed: false })
      server.create("task", { id: 2, title: "Sample Task 2", completed: true })
    },
    routes() {
      this.namespace = "api"

      this.get("/tasks", (schema) => {
        return schema.all("task")
      })

      this.post("/tasks", (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.create("task", attrs)
      })
    },
  })
}