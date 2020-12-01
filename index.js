function createEmployeeRecord(employeeArray)
{
  let newEmployeeRecord = {
    "firstName": employeeArray[0],
    "familyName": employeeArray[1],
    "title": employeeArray[2],
    "payPerHour": employeeArray[3],
    "timeInEvents": [],
    "timeOutEvents": []
  };
  return newEmployeeRecord;
}

function createEmployeeRecords(arrayOfArrays)
{
  let arrayOfRecords = [];
  for (let i = 0; i < arrayOfArrays.length; i++)
  {
    arrayOfRecords.push(createEmployeeRecord(arrayOfArrays[i]));
  }
  return arrayOfRecords;
}

function createTimeInEvent(employeeRecord, dateStamp)
{
  let timeInEvent = {
    "type": "TimeIn",
    "hour": dateStamp.substring(11, 15),
    "date": dateStamp.substring(0, 10)
  };
  employeeRecord.timeInEvents.push(timeInEvent);
  return employeeRecord;
}

function createTimeOutEvent()
{
  
}