declare module 'flat-rent-sdk' {

   //хотела бы узнать если такое написание валидно
   //export type photosPng = ['vnd331.png', 'vnd331.png' | 'ab2e2.png', 'ab2e2.png' | 'mvm32l.png', 'mvm32l.png' | string]
   //export type coordinatesNumber = [59.930325, 30.3291592 | 59.9299603, 30.3658932 | 59.9194966, 30.309389 | number]

   export interface Database {
      id: string,
      title: string,
      details: string,
      //photos: photosPng[string],   ??можно ли так использовать???
      photos: string[],
      //coordinates: coordinatesNumber[number],  ??можно ли так использовать???
      coordinates: number[]
      bookedDates: object,
      price: number
   }

   const database: Database[]

   export function cloneDate(date: Date): Date
   export function addDays(date: Date, days: number): Date

   export const backendPort: number
   export const localStorageKey: string

   export interface Parameters {
      city: string;
      checkInDate: Date;
      checkOutDate: Date;
      priceLimit?: number;
   }

   export class FlatRentSdk {
      constructor(_readDatabase: void, _writeDatabase: void, database: Database[]);
      database: Database[]

      get(id: string): Promise<Database | null | Error>
      search(parameters: Parameters): Promise<Database[] | Error>
      book(flatId: number, checkInDate: Date, checkOutDate: Date): Promise<number | Error>
      _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void
      _resetTime(date: Date): void
      _calculateDifferenceInDays(startDate: Date, endDate: Date): number
      _generateDateRange(from: Date, to: Date): Date[]
      _generateTransactionId(): number
      _areAllDatesAvailable(flat: Database, dateRange: Date[]): boolean
      _formatFlatObject(flat: Database, nightNumber: number): Database
      _readDatabase(): Database[]
      _writeDatabase(database: Database[]): void
      _syncDatabase(database: Database[]): void
   }

}