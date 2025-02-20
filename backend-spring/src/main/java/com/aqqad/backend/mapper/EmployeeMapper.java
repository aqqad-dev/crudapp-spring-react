package com.aqqad.backend.mapper;

import com.aqqad.backend.dto.EmployeeDto;
import com.aqqad.backend.entity.Employee;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, builder = @Builder(disableBuilder = true))
public interface EmployeeMapper {
    Employee toEntity(EmployeeDto employeeDto);
    EmployeeDto toDto(Employee employee);
    List<EmployeeDto> toDtos(List<Employee> employees);
}
