type EventFunction = (...args: any[]) => any
type EventMap = Record<string, EventFunction>

class EventHandler {
  private readonly Events = new Map<string, Set<EventFunction>>()
}
