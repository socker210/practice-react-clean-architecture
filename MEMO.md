# Entity

## Description

Application independent business rule

## Class

Counter

# Interactor (Use Case)

## Description

Application-specific business rule

## Class

CounterInteractor

# Adapter

## Description

Glue code from/to Interactor and Presenter, most of the time implementing a framework-specific behavior. e.g. Redux

## Class

redux/counter

# Presenter

## Description

Maps data from/to Adapter to/from Components

## Class

AppPresenter

# Components

## Description

Simplest possible unit of presentation. Any mapping, conversation, MUST be done by the Presenter

## Class

components/Counter
