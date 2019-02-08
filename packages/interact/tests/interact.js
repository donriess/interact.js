import interactions from '@interactjs/core/interactions';
import { jsdom } from '@interactjs/_dev/test/domator';
import test from '@interactjs/_dev/test/test';
import interact, { scope } from '../interact';
test('interact export', t => {
    scope.init(jsdom('').defaultView);
    interactions.install(scope);
    const interactable1 = interact('selector');
    t.assert(interactable1 instanceof scope.Interactable, 'interact function returns Interactable instance');
    t.equal(interact('selector'), interactable1, 'same interactable is returned with same target and context');
    t.equal(scope.interactables.list.length, 1, 'new interactables are added to list');
    interactable1.unset();
    t.equal(scope.interactables.list.length, 0, 'unset interactables are removed');
    const constructsUniqueMessage = 'unique contexts make unique interactables with identical targets';
    const doc1 = jsdom('');
    const doc2 = jsdom('');
    const results = [
        ['repeat', doc1],
        ['repeat', doc2],
        [doc1, doc1],
        [doc2.body, doc2],
    ].reduce((acc, [target, context]) => {
        const interactable = interact(target, { context });
        if (acc.includes(interactable)) {
            t.fail(constructsUniqueMessage);
        }
        acc.push({ interactable, target, context });
        return acc;
    }, []);
    t.pass(constructsUniqueMessage);
    const getsUniqueMessage = 'interactions.get returns correct result with identical targets and different contexts';
    for (const { interactable, target, context } of results) {
        if (scope.interactables.get(target, { context }) !== interactable) {
            t.fail(getsUniqueMessage);
        }
    }
    t.pass(getsUniqueMessage);
    scope.interactables.list.forEach(i => i.unset());
    delete scope.Interactable;
    t.end();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlcmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSwrQkFBK0IsQ0FBQTtBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFDckQsT0FBTyxJQUFJLE1BQU0sNEJBQTRCLENBQUE7QUFDN0MsT0FBTyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUE7QUFFN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFM0IsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxZQUFZLEtBQUssQ0FBQyxZQUFZLEVBQ2xELGlEQUFpRCxDQUFDLENBQUE7SUFDcEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYSxFQUN6Qyw0REFBNEQsQ0FBQyxDQUFBO0lBQy9ELENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFDeEMscUNBQXFDLENBQUMsQ0FBQTtJQUV4QyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUN4QyxpQ0FBaUMsQ0FBQyxDQUFBO0lBRXBDLE1BQU0sdUJBQXVCLEdBQzNCLGtFQUFrRSxDQUFBO0lBRXBFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN0QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdEIsTUFBTSxPQUFPLEdBQUc7UUFDZCxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFDaEIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1FBQ2hCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNaLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7S0FDbEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTtRQUNsQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUVsRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1NBQ2hDO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUMzQyxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVOLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUUvQixNQUFNLGlCQUFpQixHQUNyQix1RkFBdUYsQ0FBQTtJQUV6RixLQUFLLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLE9BQU8sRUFBRTtRQUN2RCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssWUFBWSxFQUFFO1lBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtTQUMxQjtLQUNGO0lBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBRXpCLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBRWhELE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQTtJQUV6QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7QUFDVCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnRlcmFjdGlvbnMgZnJvbSAnQGludGVyYWN0anMvY29yZS9pbnRlcmFjdGlvbnMnXG5pbXBvcnQgeyBqc2RvbSB9IGZyb20gJ0BpbnRlcmFjdGpzL19kZXYvdGVzdC9kb21hdG9yJ1xuaW1wb3J0IHRlc3QgZnJvbSAnQGludGVyYWN0anMvX2Rldi90ZXN0L3Rlc3QnXG5pbXBvcnQgaW50ZXJhY3QsIHsgc2NvcGUgfSBmcm9tICcuLi9pbnRlcmFjdCdcblxudGVzdCgnaW50ZXJhY3QgZXhwb3J0JywgdCA9PiB7XG4gIHNjb3BlLmluaXQoanNkb20oJycpLmRlZmF1bHRWaWV3KVxuICBpbnRlcmFjdGlvbnMuaW5zdGFsbChzY29wZSlcblxuICBjb25zdCBpbnRlcmFjdGFibGUxID0gaW50ZXJhY3QoJ3NlbGVjdG9yJylcbiAgdC5hc3NlcnQoaW50ZXJhY3RhYmxlMSBpbnN0YW5jZW9mIHNjb3BlLkludGVyYWN0YWJsZSxcbiAgICAnaW50ZXJhY3QgZnVuY3Rpb24gcmV0dXJucyBJbnRlcmFjdGFibGUgaW5zdGFuY2UnKVxuICB0LmVxdWFsKGludGVyYWN0KCdzZWxlY3RvcicpLCBpbnRlcmFjdGFibGUxLFxuICAgICdzYW1lIGludGVyYWN0YWJsZSBpcyByZXR1cm5lZCB3aXRoIHNhbWUgdGFyZ2V0IGFuZCBjb250ZXh0JylcbiAgdC5lcXVhbChzY29wZS5pbnRlcmFjdGFibGVzLmxpc3QubGVuZ3RoLCAxLFxuICAgICduZXcgaW50ZXJhY3RhYmxlcyBhcmUgYWRkZWQgdG8gbGlzdCcpXG5cbiAgaW50ZXJhY3RhYmxlMS51bnNldCgpXG4gIHQuZXF1YWwoc2NvcGUuaW50ZXJhY3RhYmxlcy5saXN0Lmxlbmd0aCwgMCxcbiAgICAndW5zZXQgaW50ZXJhY3RhYmxlcyBhcmUgcmVtb3ZlZCcpXG5cbiAgY29uc3QgY29uc3RydWN0c1VuaXF1ZU1lc3NhZ2UgPVxuICAgICd1bmlxdWUgY29udGV4dHMgbWFrZSB1bmlxdWUgaW50ZXJhY3RhYmxlcyB3aXRoIGlkZW50aWNhbCB0YXJnZXRzJ1xuXG4gIGNvbnN0IGRvYzEgPSBqc2RvbSgnJylcbiAgY29uc3QgZG9jMiA9IGpzZG9tKCcnKVxuICBjb25zdCByZXN1bHRzID0gW1xuICAgIFsncmVwZWF0JywgZG9jMV0sXG4gICAgWydyZXBlYXQnLCBkb2MyXSxcbiAgICBbZG9jMSwgZG9jMV0sXG4gICAgW2RvYzIuYm9keSwgZG9jMl0sXG4gIF0ucmVkdWNlKChhY2MsIFt0YXJnZXQsIGNvbnRleHRdKSA9PiB7XG4gICAgY29uc3QgaW50ZXJhY3RhYmxlID0gaW50ZXJhY3QodGFyZ2V0LCB7IGNvbnRleHQgfSlcblxuICAgIGlmIChhY2MuaW5jbHVkZXMoaW50ZXJhY3RhYmxlKSkge1xuICAgICAgdC5mYWlsKGNvbnN0cnVjdHNVbmlxdWVNZXNzYWdlKVxuICAgIH1cblxuICAgIGFjYy5wdXNoKHsgaW50ZXJhY3RhYmxlLCB0YXJnZXQsIGNvbnRleHQgfSlcbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxuXG4gIHQucGFzcyhjb25zdHJ1Y3RzVW5pcXVlTWVzc2FnZSlcblxuICBjb25zdCBnZXRzVW5pcXVlTWVzc2FnZSA9XG4gICAgJ2ludGVyYWN0aW9ucy5nZXQgcmV0dXJucyBjb3JyZWN0IHJlc3VsdCB3aXRoIGlkZW50aWNhbCB0YXJnZXRzIGFuZCBkaWZmZXJlbnQgY29udGV4dHMnXG5cbiAgZm9yIChjb25zdCB7IGludGVyYWN0YWJsZSwgdGFyZ2V0LCBjb250ZXh0IH0gb2YgcmVzdWx0cykge1xuICAgIGlmIChzY29wZS5pbnRlcmFjdGFibGVzLmdldCh0YXJnZXQsIHsgY29udGV4dCB9KSAhPT0gaW50ZXJhY3RhYmxlKSB7XG4gICAgICB0LmZhaWwoZ2V0c1VuaXF1ZU1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgdC5wYXNzKGdldHNVbmlxdWVNZXNzYWdlKVxuXG4gIHNjb3BlLmludGVyYWN0YWJsZXMubGlzdC5mb3JFYWNoKGkgPT4gaS51bnNldCgpKVxuXG4gIGRlbGV0ZSBzY29wZS5JbnRlcmFjdGFibGVcblxuICB0LmVuZCgpXG59KVxuIl19