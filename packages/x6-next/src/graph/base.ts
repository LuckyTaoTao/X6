import { Disposable } from '@antv/x6-core'
import { Graph } from './graph'

export class Base extends Disposable {
  public readonly graph: Graph

  public get options() {
    return this.graph.options
  }

  public get model() {
    return this.graph.model
  }

  public get view() {
    return this.graph.renderer.graphView
  }

  constructor(graph: Graph) {
    super()
    this.graph = graph
    this.init()
  }

  protected init() {}
}

export namespace Base {}
