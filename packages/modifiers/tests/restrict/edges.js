import test from '@interactjs/_dev/test/test';
import Interaction from '@interactjs/core/Interaction';
import { mockSignals } from '@interactjs/core/tests/helpers';
import restrictEdges from '../../restrict/edges';
test('restrictEdges', (t) => {
    const interaction = new Interaction({ signals: mockSignals() });
    interaction.prepared = {};
    interaction.prepared.edges = { top: true, bottom: true, left: true, right: true };
    interaction.resizeRects = {};
    interaction.resizeRects.inverted = { x: 10, y: 20, width: 300, height: 200 };
    interaction._interacting = true;
    const options = { enabled: true };
    const coords = { x: 40, y: 40 };
    const offset = { top: 0, left: 0, bottom: 0, right: 0 };
    const state = { options, offset };
    const arg = { interaction, state };
    arg.coords = { ...coords };
    // outer restriction
    options.outer = { top: 100, left: 100, bottom: 200, right: 200 };
    restrictEdges.set(arg);
    t.deepEqual(arg.coords, { x: coords.y + 60, y: coords.y + 60 }, 'outer restriction is applied correctly');
    arg.coords = { ...coords };
    // inner restriction
    options.outer = null;
    options.inner = { top: 0, left: 0, bottom: 10, right: 10 };
    restrictEdges.set(arg);
    t.deepEqual(arg.coords, { x: coords.x - 40, y: coords.y - 40 }, 'inner restriction is applied correctly');
    // offset
    Object.assign(offset, {
        top: 100,
        left: 100,
        bottom: 200,
        right: 200,
    });
    arg.coords = { ...coords };
    options.outer = { top: 100, left: 100, bottom: 200, right: 200 };
    options.inner = null;
    restrictEdges.set(arg);
    t.deepEqual(arg.coords, { x: coords.x + 160, y: coords.x + 160 }, 'outer restriction is applied correctly with offset');
    // start
    interaction.modifiers = {};
    interaction.modifiers.startOffset = { top: 5, left: 10, bottom: -8, right: -16 };
    interaction.target = {
        getRect() {
            return { top: 500, left: 900 };
        },
    };
    options.offset = 'self';
    restrictEdges.start(arg);
    t.deepEqual(arg.state.offset, { top: 505, left: 910, bottom: 508, right: 916 }, 'start gets x/y from selector string');
    t.end();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSw0QkFBNEIsQ0FBQTtBQUM3QyxPQUFPLFdBQVcsTUFBTSw4QkFBOEIsQ0FBQTtBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUE7QUFDNUQsT0FBTyxhQUFhLE1BQU0sc0JBQXNCLENBQUE7QUFFaEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFTLENBQUMsQ0FBQTtJQUN0RSxXQUFXLENBQUMsUUFBUSxHQUFHLEVBQVMsQ0FBQTtJQUNoQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUNqRixXQUFXLENBQUMsV0FBVyxHQUFHLEVBQVMsQ0FBQTtJQUNuQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQVMsQ0FBQTtJQUNuRixXQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtJQUUvQixNQUFNLE9BQU8sR0FBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUN0QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFBO0lBQy9CLE1BQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxF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LE1BQU0sQ0FBQTtJQUN2QixhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRXhCLENBQUMsQ0FBQyxTQUFTLENBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ2hCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUNoRCxxQ0FBcUMsQ0FDdEMsQ0FBQTtJQUVELENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUNULENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRlc3QgZnJvbSAnQGludGVyYWN0anMvX2Rldi90ZXN0L3Rlc3QnXG5pbXBvcnQgSW50ZXJhY3Rpb24gZnJvbSAnQGludGVyYWN0anMvY29yZS9JbnRlcmFjdGlvbidcbmltcG9ydCB7IG1vY2tTaWduYWxzIH0gZnJvbSAnQGludGVyYWN0anMvY29yZS90ZXN0cy9oZWxwZXJzJ1xuaW1wb3J0IHJlc3RyaWN0RWRnZXMgZnJvbSAnLi4vLi4vcmVzdHJpY3QvZWRnZXMnXG5cbnRlc3QoJ3Jlc3RyaWN0RWRnZXMnLCAodCkgPT4ge1xuICBjb25zdCBpbnRlcmFjdGlvbiA9IG5ldyBJbnRlcmFjdGlvbih7IHNpZ25hbHM6IG1vY2tTaWduYWxzKCkgfSBhcyBhbnkpXG4gIGludGVyYWN0aW9uLnByZXBhcmVkID0ge30gYXMgYW55XG4gIGludGVyYWN0aW9uLnByZXBhcmVkLmVkZ2VzID0geyB0b3A6IHRydWUsIGJvdHRvbTogdHJ1ZSwgbGVmdDogdHJ1ZSwgcmlnaHQ6IHRydWUgfVxuICBpbnRlcmFjdGlvbi5yZXNpemVSZWN0cyA9IHt9IGFzIGFueVxuICBpbnRlcmFjdGlvbi5yZXNpemVSZWN0cy5pbnZlcnRlZCA9IHsgeDogMTAsIHk6IDIwLCB3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMCB9IGFzIGFueVxuICBpbnRlcmFjdGlvbi5faW50ZXJhY3RpbmcgPSB0cnVlXG5cbiAgY29uc3Qgb3B0aW9uczogYW55ID0geyBlbmFibGVkOiB0cnVlIH1cbiAgY29uc3QgY29vcmRzID0geyB4OiA0MCwgeTogNDAgfVxuICBjb25zdCBvZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwLCByaWdodDogMCB9XG4gIGNvbnN0IHN0YXRlID0geyBvcHRpb25zLCBvZmZzZXQgfVxuICBjb25zdCBhcmcgPSB7IGludGVyYWN0aW9uLCBzdGF0ZSB9IGFzIGFueVxuXG4gIGFyZy5jb29yZHMgPSB7IC4uLmNvb3JkcyB9XG5cbiAgLy8gb3V0ZXIgcmVzdHJpY3Rpb25cbiAgb3B0aW9ucy5vdXRlciA9IHsgdG9wOiAxMDAsIGxlZnQ6IDEwMCwgYm90dG9tOiAyMDAsIHJpZ2h0OiAyMDAgfVxuICByZXN0cmljdEVkZ2VzLnNldChhcmcpXG5cbiAgdC5kZWVwRXF1YWwoXG4gICAgYXJnLmNvb3JkcyxcbiAgICB7IHg6IGNvb3Jkcy55ICsgNjAsIHk6IGNvb3Jkcy55ICsgNjAgfSxcbiAgICAnb3V0ZXIgcmVzdHJpY3Rpb24gaXMgYXBwbGllZCBjb3JyZWN0bHknXG4gIClcblxuICBhcmcuY29vcmRzID0geyAuLi5jb29yZHMgfVxuXG4gIC8vIGlubmVyIHJlc3RyaWN0aW9uXG4gIG9wdGlvbnMub3V0ZXIgPSBudWxsXG4gIG9wdGlvbnMuaW5uZXIgPSB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAxMCwgcmlnaHQ6IDEwIH1cbiAgcmVzdHJpY3RFZGdlcy5zZXQoYXJnKVxuXG4gIHQuZGVlcEVxdWFsKFxuICAgIGFyZy5jb29yZHMsXG4gICAgeyB4OiBjb29yZHMueCAtIDQwLCB5OiBjb29yZHMueSAtIDQwIH0sXG4gICAgJ2lubmVyIHJlc3RyaWN0aW9uIGlzIGFwcGxpZWQgY29ycmVjdGx5J1xuICApXG5cbiAgLy8gb2Zmc2V0XG4gIE9iamVjdC5hc3NpZ24ob2Zmc2V0LCB7XG4gICAgdG9wOiAxMDAsXG4gICAgbGVmdDogMTAwLFxuICAgIGJvdHRvbTogMjAwLFxuICAgIHJpZ2h0OiAyMDAsXG4gIH0pXG4gIGFyZy5jb29yZHMgPSB7IC4uLmNvb3JkcyB9XG5cbiAgb3B0aW9ucy5vdXRlciA9IHsgdG9wOiAxMDAsIGxlZnQ6IDEwMCwgYm90dG9tOiAyMDAsIHJpZ2h0OiAyMDAgfVxuICBvcHRpb25zLmlubmVyID0gbnVsbFxuICByZXN0cmljdEVkZ2VzLnNldChhcmcpXG5cbiAgdC5kZWVwRXF1YWwoXG4gICAgYXJnLmNvb3JkcyxcbiAgICB7IHg6IGNvb3Jkcy54ICsgMTYwLCB5OiBjb29yZHMueCArIDE2MCB9LFxuICAgICdvdXRlciByZXN0cmljdGlvbiBpcyBhcHBsaWVkIGNvcnJlY3RseSB3aXRoIG9mZnNldCdcbiAgKVxuXG4gIC8vIHN0YXJ0XG4gIGludGVyYWN0aW9uLm1vZGlmaWVycyA9IHt9XG4gIGludGVyYWN0aW9uLm1vZGlmaWVycy5zdGFydE9mZnNldCA9IHsgdG9wOiA1LCBsZWZ0OiAxMCwgYm90dG9tOiAtOCwgcmlnaHQ6IC0xNiB9XG4gIGludGVyYWN0aW9uLnRhcmdldCA9IHtcbiAgICBnZXRSZWN0ICgpIHtcbiAgICAgIHJldHVybiB7IHRvcDogNTAwLCBsZWZ0OiA5MDAgfVxuICAgIH0sXG4gIH0gYXMgYW55XG5cbiAgb3B0aW9ucy5vZmZzZXQgPSAnc2VsZidcbiAgcmVzdHJpY3RFZGdlcy5zdGFydChhcmcpXG5cbiAgdC5kZWVwRXF1YWwoXG4gICAgYXJnLnN0YXRlLm9mZnNldCxcbiAgICB7IHRvcDogNTA1LCBsZWZ0OiA5MTAsIGJvdHRvbTogNTA4LCByaWdodDogOTE2IH0sXG4gICAgJ3N0YXJ0IGdldHMgeC95IGZyb20gc2VsZWN0b3Igc3RyaW5nJ1xuICApXG5cbiAgdC5lbmQoKVxufSlcbiJdfQ==