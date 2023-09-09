import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subsciber) => {
  console.log('Observable Executed');
  subsciber.next('Alice');
  setTimeout(() => subsciber.next('Ben'), 2000);
  setTimeout(() => subsciber.next('Charlie'), 4000);
});

// const observer = {
//   next: (value) => console.log(value),
// };

// observable$.subscribe(observer);

//Shorthand property of above observable$.subscribe((value) => console.log(value))

// const subscription = observable$.subscribe((value) => console.log(value)); // subscribe method return Subscription type

// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 3000);

console.log('Subscription 1 starts');
observable$.subscribe((value) => console.log('Subscription 1:', value));

setTimeout(() => {
  console.log('Subscription 2 starts');
  observable$.subscribe((value) => console.log('Subscription 2:', value));
}, 1000);
